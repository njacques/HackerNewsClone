<template>
  <div class="wrapper">
    <navbar />
    <div>
      <story-title :id="story.id" :url="story.url">
        {{ story.title }}
      </story-title>
      <p class="subtext">
        {{ story.score }} points by <router-link :to="'/user/' + story.by">{{ story.by }}</router-link> 
        {{ story.time | relativeDate}} | 
        hide |
        past |
        web |
        favorite | 
        <story-comment-link :id="story.id" :count="story.descendants" />
      </p>
    </div>
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
import fetch from "./api";
import Navbar from "./Navbar.vue";
import StoryTitle from "./StoryTitle.vue";
import StoryCommentLink from "./StoryCommentLink.vue";

export default {
  components: { Navbar, StoryTitle, StoryCommentLink },
  data() {
    return {
      story: {},
      comments: []
    };
  }
};
</script>

