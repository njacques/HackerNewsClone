<template>
  <div class="wrapper">
    <navbar />
    <ul class="stories">
      <li v-for="story in stories" :key="story.id">
        <story-title :id="story.id" :url="story.url">
          {{ story.title }}
        </story-title>
        <p class="subtext">
          {{ story.score }} points by <router-link :to="'/user/' + story.by">{{ story.by }}</router-link> 
          {{ story.time | relativeDate}} | hide | 
          <story-comment-link :id="story.id" :count="story.descendants" />
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import Sugar from "sugar-date";

import fetch from "./api";
import Navbar from "./Navbar.vue";
import StoryTitle from "./StoryTitle.vue";
import StoryCommentLink from "./StoryCommentLink.vue";

export default {
  name: "app",
  components: { Navbar, StoryTitle, StoryCommentLink },
  created() {
    fetch("topstories")
      .then(ids => {
        this.storyIDs = ids;
        const stories = ids.splice(0, 30).map(id => fetch(`item/${id}`));
        return Promise.all(stories);
      })
      .then(stories => (this.stories = stories));
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      storyIDs: [],
      stories: []
    };
  },
  filters: {
    relativeDate(value) {
      return Sugar.Date(value * 1000).relative().raw;
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
.wrapper {
  background-color: #f6f6ef;
  margin: 0 auto;
  width: 90%;
}
.stories ul {
  list-style-type: decimal;
}
.stories li {
  list-style-type: decimal;
}
.subtext {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 7pt;
  color: #828282;
}
</style>
