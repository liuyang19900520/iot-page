<template>
  <div class="source_outside">
    <div class="source_main_side"></div>
    <div class="source_main_middle">
      <md-app>
        <md-app-drawer md-permanent="clipped" class="source_main_drawer">
          <md-list>
            <md-list-item class="align-item-middle">
              <md-button class="md-button-front">Inbox</md-button>
              <md-icon>keyboard_arrow_right</md-icon>
            </md-list-item>

            <md-list-item class="align-item-middle">
              <md-button class="md-button-front">Sent Mail</md-button>
              <md-icon>keyboard_arrow_right</md-icon>
            </md-list-item>

            <md-list-item class="align-item-middle">
              <md-button class="md-button-front">Trash</md-button>
              <md-icon>keyboard_arrow_right</md-icon>
            </md-list-item>

            <md-list-item class="align-item-middle">
              <md-button class="md-button-front">Spam</md-button>
              <md-icon>keyboard_arrow_right</md-icon>
            </md-list-item>
          </md-list>
        </md-app-drawer>

        <md-app-content class="source_main_content">
          <main-sources-content/>
        </md-app-content>
      </md-app>
    </div>
    <div class="source_main_side"></div>
  </div>
</template>

<script>
import MainSourcesContent from "~/components/sources/MainSourcesContent.vue";

export default {
  components: {
    MainSourcesContent
  },
  data: function() {
    return {};
  }
};
</script>

<style>
.align-item-middle {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
}

.md-button-front {
  justify-content: flex-start;
  width: 100%;
}

.source_outside {
  display: flex;
  align-items: center;
  justify-content: center; /*水平居中*/
}

.source_main_side {
  width: 8%;
}
.source_main_middle {
  width: 84%;
}

.source_main_drawer {
  width: 20%;
}

.source_main_content {
  width: 100%;
}
</style>



