<script setup>
import CBar from '@/components/CBar.vue'
import CCategoryBlock from '@/components/CCategoryBlock.vue'
import CLine from '@/components/CLine.vue'
import CPills from '@/components/CPills.vue'
import CStreamerName from '@/components/CStreamerName.vue'
import CText from '@/components/CText.vue'
import CSpacer from '@/components/CSpacer.vue'
import CGiphy from '@/components/CGiphy.vue'
</script>

<template>
  <div class="template">
    <div class="background"></div>
    <div class="core">
      <CCategoryBlock skin="dark" text-size="large" title="I'm on my bike!" text="Cycling around Great Britain. Currently in the Kent region." />
      <CSpacer spacing="20" />
      <CBar type="bar" skin="dark" size="medium" text-size="medium" icon="mdi:twitch" text="Live on Twitch soon!" />
      <div class="c-columns">
        <div class="col">
          <CPills orientation="vertical" skin="dark" time1="3pm CET" time2="11am EST" time3="SOON &trade;" />
        </div>
        <div class="col">
          <CSpacer spacing="20" />
          <CGiphy giphy="xT0GqImestf7wXVkLC" />
        </div>
      </div>  
      <CSpacer spacing="20" />
      <CLine type="dotted" color="white" width="100%" height="4px" spacing="10px" />
      <CText text-size="medium" skin="white" text="Trying to ride 60 miles today on this raggedy-ass bike. Wish me luck!" />
      <CLine type="dotted" color="white" width="100%" height="4px" spacing="10px" />
      <CStreamerName text-size="large" skin="white" channel="/RideTheLine" icon="mdi:twitch" />
    </div>
  </div>
</template>

<style>
.template {
  margin: 0 auto;
  max-height: 100vh;
  aspect-ratio: 9 / 19.5;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  z-index: 0;
  background: url('https://i.imgur.com/9ncYySC.jpeg') center center no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.core {
  position: relative;
  z-index: 4;
  padding: var(--size-2);
}
.giphy-embed {
  max-width: 100%;
  margin: 0;
  padding: 0;
}
</style>