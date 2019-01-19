<template>
  <div class="activity">
    <div class="title-post">
      <h1>This is the title of Activities</h1>
      <h4 class="title-post-content">  
        Mr. Bolton, making a visit to Israel, told reporters that American forces would remain in Syria until the last 
        remnants of the Islamic State were defeated and Turkey provided guarantees that it would not strike Kurdish forces 
        allied with the United States. He and other top White House advisers have led a behind-the-scenes effort to slow Mr. 
        Trump’s order and reassure allies, including Israel.
      </h4>
    </div>
    <div class="md-layout ">
      <md-card class="md-layout-item">
        <md-card-media>
          <img src="../assets/post-1.jpg" alt="People">
        </md-card-media>

        <md-card-header>
          <div class="md-title">Title goes here</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>

        <md-card-content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.</md-card-content>
      </md-card>

      <md-card class="md-layout-item">
        <md-card-media>
          <img src="../assets/post-1.jpg" alt="People">
        </md-card-media>

        <md-card-header>
          <div class="md-title">Title goes here</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>

        <md-card-content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.</md-card-content>
      </md-card>

      <md-card class="md-layout-item">
        <md-card-media>
          <img src="../assets/post-1.jpg" alt="People">
        </md-card-media>

        <md-card-header>
          <div class="md-title">Title goes here</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>

        <md-card-content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.</md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layouts",
  methods: {
    sendMessage() {
      window.alert("Send a message...");
    },
    doACall() {
      window.alert("Calling someone...");
    }
  }
};
</script>

<style lang="scss" scoped>

.activity{
  width: 100%
}

.md-card {
  width: 30%;
  margin: 1%;
  display: inline-block;
  vertical-align: top;
}

.title-post{
  margin: 5%
}

.title-post-content{
  margin: 3%
}

</style>