<script setup>

import CBar from '@/components/CBar.vue'
import CCategory from '@/components/CCategory.vue'
import CCategoryBlock from '@/components/CCategoryBlock.vue'
import CCollage from '@/components/CCollage.vue'
import CIcon from '@/components/CIcon.vue'
import CPills from '@/components/CPills.vue'
import CStreamerName from '@/components/CStreamerName.vue'
import CText from '@/components/CText.vue'

</script>
<template>
  <article>
    <h2>Cbar</h2>
    <h3>type: plain</h3>
    <p>Options:</p>
<pre>type: plain, bar 
skin: white, light, dim, dark
size: tiny, small, medium, large
text-size: tiny, small, medium, large 
icon: any icones.js.org icon name, like mdi:twitch 
text: any plain text you want to show on the bar</pre>
  </article>
  <div class="c-columns">
    <div class="col">
      <CBar 
        type="plain" 
        skin="white" 
        size="tiny" 
        text-size="tiny"
        icon="ic:baseline-arrow-circle-right"
        text="plain white tiny tiny" />
      <CBar 
        type="plain" 
        skin="light" 
        size="tiny" 
        text-size="tiny"
        icon="material-symbols-light:brightness-7"
        text="plain light tiny tiny" />
      <CBar 
        type="plain" 
        skin="dim" 
        size="tiny" 
        text-size="tiny"
        icon="material-symbols:swipe-right"
        text="plain dim tiny tiny" />
      <CBar 
        type="plain" 
        skin="dark" 
        size="tiny" 
        text-size="tiny"
        icon="material-symbols-light:brightness-4-outline"
        text="plain dark tiny tiny" />
    </div>
    <div class="col">
      <CBar 
        type="plain" 
        skin="white" 
        size="small" 
        text-size="small"
        icon="ic:baseline-arrow-circle-right"
        text="plain white small small" />
      <CBar 
        type="plain" 
        skin="light" 
        size="small" 
        text-size="small"
        icon="material-symbols-light:brightness-7"
        text="plain light small small" />
      <CBar 
        type="plain" 
        skin="dim" 
        size="small" 
        text-size="small"
        icon="material-symbols:swipe-right"
        text="plain dim small small" />
      <CBar 
        type="plain" 
        skin="dark" 
        size="small" 
        text-size="small"
        icon="material-symbols-light:brightness-4-outline"
        text="plain dark small small" />
    </div>
  </div>
  <div class="c-columns">
    <div class="col">
      <CBar 
        type="plain" 
        skin="white" 
        size="medium" 
        text-size="medium"
        icon="ic:baseline-arrow-circle-right"
        text="plain white medium medium" />
      <CBar 
        type="plain" 
        skin="light" 
        size="medium" 
        text-size="medium"
        icon="material-symbols-light:brightness-7"
        text="plain light medium medium" />
      <CBar 
        type="plain" 
        skin="dim" 
        size="medium" 
        text-size="medium"
        icon="material-symbols:swipe-right"
        text="plain dim medium medium" />
      <CBar 
        type="plain" 
        skin="dark" 
        size="medium" 
        text-size="medium"
        icon="material-symbols-light:brightness-4-outline"
        text="plain dark medium medium" />
    </div>
    <div class="col">
      <CBar 
        type="plain" 
        skin="white" 
        size="large" 
        text-size="large"
        icon="ic:baseline-arrow-circle-right"
        text="plain white large large" />
      <CBar 
        type="plain" 
        skin="light" 
        size="large" 
        text-size="large"
        icon="material-symbols-light:brightness-7"
        text="plain light large large" />
      <CBar 
        type="plain" 
        skin="dim" 
        size="large" 
        text-size="large"
        icon="material-symbols:swipe-right"
        text="plain dim large large" />
      <CBar 
        type="plain" 
        skin="dark" 
        size="large" 
        text-size="large"
        icon="material-symbols-light:brightness-4-outline"
        text="plain dark large large" />
    </div>
  </div>
    <article>
    <h2>Cbar</h2>
    <h3>type: bar</h3>
    <p>Options:</p>
<pre>type: plain, bar 
skin: white, light, dim, dark
size: tiny, small, medium, large
text-size: tiny, small, medium, large 
icon: any icones.js.org icon name, like mdi:twitch 
text: any plain text</pre>
  </article>
  <CBar 
    type="bar" 
    skin="white" 
    size="medium" 
    text-size="medium"
    icon="material-symbols:location-on"
    text="bar white medium medium" />
  <CBar 
    type="bar" 
    skin="light" 
    size="medium" 
    text-size="medium"
    icon="mdi:twitch"
    text="bar light medium medium" />
  <CBar 
    type="bar" 
    skin="dim" 
    size="medium" 
    text-size="medium"
    icon="mdi:campfire"
    text="bar dim medium medium" />
  <CBar 
    type="bar" 
    skin="dark" 
    size="medium" 
    text-size="medium"
    icon="bx:bxl-facebook-square"
    text="bar dark medium medium" />
    <article>
    <h2>CCategory</h2>
    <p>Options:</p>
<pre>skin: white, light, dim, dark
text-size: tiny, small, medium, large 
text: any plain text</pre>
  </article>
  <div class="c-columns">
    <div class="col">
      <CCategory 
        skin="white"
        text-size="tiny"
        text="World of Warcraft" />
      <CCategory 
        skin="white"
        text-size="small"
        text="World of Warcraft" />
      <CCategory 
        skin="white"
        text-size="medium"
        text="World of Warcraft" />
      <CCategory 
        skin="white"
        text-size="large"
        text="World of Warcraft" />
    </div>
    <div class="col">
      <CCategory 
        skin="light"
        text-size="tiny"
        text="World of Warcraft" />
      <CCategory 
        skin="light"
        text-size="small"
        text="World of Warcraft" />
      <CCategory 
        skin="light"
        text-size="medium"
        text="World of Warcraft" />
      <CCategory 
        skin="light"
        text-size="large"
        text="World of Warcraft" />
    </div>
    <div class="col">
      <CCategory 
        skin="dim"
        text-size="tiny"
        text="World of Warcraft" />
      <CCategory 
        skin="dim"
        text-size="small"
        text="World of Warcraft" />
      <CCategory 
        skin="dim"
        text-size="medium"
        text="World of Warcraft" />
      <CCategory 
        skin="dim"
        text-size="large"
        text="World of Warcraft" />
    </div>
    <div class="col">
      <CCategory 
        skin="dark"
        text-size="tiny"
        text="World of Warcraft" />
      <CCategory 
        skin="dark"
        text-size="small"
        text="World of Warcraft" />
      <CCategory 
        skin="dark"
        text-size="medium"
        text="World of Warcraft" />
      <CCategory 
        skin="dark"
        text-size="large"
        text="World of Warcraft" />
    </div>
  </div>
  
    <article>
    <h2>CCategoryBlock</h2>
    <p>Options:</p>
<pre>text-size: tiny, small, medium, large 
title: any plain text
text: any plain text</pre>
  </article>
  <CCategoryBlock
  text-size="tiny"
  title="tiny"
  text="Failing at WoW again tonight" />
  <CCategoryBlock
  text-size="small"
  title="small"
  text="Failing at WoW again tonight" />
  <CCategoryBlock
  text-size="medium"
  title="medium"
  text="Failing at WoW again tonight" />
  <CCategoryBlock
  text-size="large"
  title="large"
  text="Failing at WoW again tonight" />
  <article>
    <h2>CCollage</h2>
    <p>Options:</p>
<pre>text-size: tiny, small, medium, large 
photo: any photo link
category-image: twitch game category image
text: any plain text</pre>
  </article>
  <CCollage
  text-size="tiny"
  photo="https://static-cdn.jtvnw.net/jtv_user_pictures/a36b110c-89bd-4da6-ba86-4dd63ea66134-profile_image-300x300.jpeg"
  category-image="https://static-cdn.jtvnw.net/ttv-boxart/509672-285x380.jpg"
  text="It's my Birthday! I'm in Hungary! Come hang out!" />
  <CCollage
  text-size="small"
  photo="https://static-cdn.jtvnw.net/jtv_user_pictures/a36b110c-89bd-4da6-ba86-4dd63ea66134-profile_image-300x300.jpeg"
  category-image="https://static-cdn.jtvnw.net/ttv-boxart/509672-285x380.jpg"
  text="It's my Birthday! I'm in Hungary! Come hang out!" />
  <CCollage
  text-size="medium"
  photo="https://static-cdn.jtvnw.net/jtv_user_pictures/a36b110c-89bd-4da6-ba86-4dd63ea66134-profile_image-300x300.jpeg"
  category-image="https://static-cdn.jtvnw.net/ttv-boxart/509672-285x380.jpg"
  text="It's my Birthday! I'm in Hungary! Come hang out!" />
  <CCollage
  text-size="large"
  photo="https://static-cdn.jtvnw.net/jtv_user_pictures/a36b110c-89bd-4da6-ba86-4dd63ea66134-profile_image-300x300.jpeg"
  category-image="https://static-cdn.jtvnw.net/ttv-boxart/509672-285x380.jpg"
  text="It's my Birthday! I'm in Hungary! Come hang out!" />
  <article>
    <h2>CIcon</h2>
    <p>Options:</p>
<pre>icon-size: tiny, small, medium, large 
skin: white, light, dim, dark
icon: any icones.js.org icon name, like mdi:twitch</pre>
  </article>

  <div class="c-columns">
    <div class="col spaced">
      <br>
      <article>
        <p>tiny</p>
        <CIcon
        skin="white"
        icon-size="tiny"
        icon="mdi:account-circle" />
        <CIcon
        skin="light"
        icon-size="tiny"
        icon="mdi:account-circle" />
        <CIcon
        skin="dim"
        icon-size="tiny"
        icon="mdi:account-circle" />
        <CIcon
        skin="dark"
        icon-size="tiny"
        icon="mdi:account-circle" />
      </article>
    </div>
    <div class="col spaced">
      <br>
      <article>
        <p>small</p>
        <CIcon
        skin="white"
        icon-size="small"
        icon="mdi:account-circle" />
        <CIcon
        skin="light"
        icon-size="small"
        icon="mdi:account-circle" />
        <CIcon
        skin="dim"
        icon-size="small"
        icon="mdi:account-circle" />
        <CIcon
        skin="dark"
        icon-size="small"
        icon="mdi:account-circle" />
      </article>
    </div>
    <div class="col spaced">
      <br>
      <article>
        <p>medium</p>
        <CIcon
        skin="white"
        icon-size="medium"
        icon="mdi:account-circle" />
        <CIcon
        skin="light"
        icon-size="medium"
        icon="mdi:account-circle" />
        <CIcon
        skin="dim"
        icon-size="medium"
        icon="mdi:account-circle" />
        <CIcon
        skin="dark"
        icon-size="medium"
        icon="mdi:account-circle" />
      </article>
    </div>
    <div class="col spaced">
      <br>
      <article>
        <p>large</p>
        <CIcon
        skin="white"
        icon-size="large"
        icon="mdi:account-circle" />
        <CIcon
        skin="light"
        icon-size="large"
        icon="mdi:account-circle" />
        <CIcon
        skin="dim"
        icon-size="large"
        icon="mdi:account-circle" />
        <CIcon
        skin="dark"
        icon-size="large"
        icon="mdi:account-circle" />
      </article>
    </div>
  </div>
  <article>
    <h2>CPills</h2>
    <p>Options:</p>
<pre>orientation: horizontal, vertical 
skin: white, light, dim, dark
times: object with time1, time2, time3</pre>
  </article>
  <div class="c-columns">
    <div class="col">
      <CPills
      orientation="horizontal"
      skin="white"
      time1="11am CST"
      time2="1pm EST"
      time3="7pm CET" />
      <CPills
      orientation="vertical"
      skin="white"
      time1="11am CST"
      time2="1pm EST"
      time3="7pm CET" />
    </div>
    <div class="col">
      <CPills
      orientation="horizontal"
      skin="light"
      time1="11am CST"
      time2="1pm EST"
      time3="7pm CET" />
      <CPills
      orientation="vertical"
      skin="light"
      time1="11am CST"
      time2="1pm EST"
      time3="7pm CET" />
    </div>
    <div class="col">
      <CPills
      orientation="horizontal"
      skin="dim"
      time1="11am CST"
      time2="1pm EST"
      time3="7pm CET" />
      <CPills
      orientation="vertical"
      skin="dim"
      time1="11am CST"
      time2="1pm EST"
      time3="7pm CET" />
    </div>
    <div class="col">
      <CPills
      orientation="horizontal"
      skin="dark"
      time1="11am CST"
      time2="1pm EST"
      time3="7pm CET" />
      <CPills
      orientation="vertical"
      skin="dark"
      time1="11am CST"
      time2="1pm EST"
      time3="7pm CET" />
    </div>
  </div>
  <article>
    <h2>CText</h2>
    <p>Options:</p>
<pre>text-size: tiny, small, medium, large 
skin: white, light, dim, dark
text: any plain text</pre>
  </article>
  <CText
  text-size="tiny"
  skin="white"
  text="Can I finally beat this awesome game? Come hang out on stream!" />
  <CText
  text-size="small"
  skin="white"
  text="Can I finally beat this awesome game? Come hang out on stream!" />
  <CText
  text-size="medium"
  skin="white"
  text="Can I finally beat this awesome game? Come hang out on stream!" />
  <CText
  text-size="large"
  skin="white"
  text="Can I finally beat this awesome game? Come hang out on stream!" />
  <article>
    <h2>CStreamerName</h2>
    <p>Options:</p>
<pre>text-size: tiny, small, medium, large 
skin: white, light, dim, dark
channel: streamer channel name
icon: any icones.js.org icon name, like mdi:twitch</pre>
  </article>
  <div class="c-columns">
    <div class="col">
      <CStreamerName
      text-size="tiny"
      skin="white"
      channel="/Astronomoose"
      icon="mdi:twitch" />
      <CStreamerName
      text-size="small"
      skin="white"
      channel="/Astronomoose"
      icon="mdi:twitch" />
      <CStreamerName
      text-size="medium"
      skin="white"
      channel="/Astronomoose"
      icon="mdi:twitch" />
      <CStreamerName
      text-size="large"
      skin="white"
      channel="/Astronomoose"
      icon="mdi:twitch" />
    </div>
    <div class="col">
      <CStreamerName
      text-size="tiny"
      skin="light"
      channel="/Astronomoose"
      icon="mdi:twitch" />
      <CStreamerName
      text-size="small"
      skin="light"
      channel="/Astronomoose"
      icon="mdi:twitch" />
      <CStreamerName
      text-size="medium"
      skin="light"
      channel="/Astronomoose"
      icon="mdi:twitch" />
      <CStreamerName
      text-size="large"
      skin="light"
      channel="/Astronomoose"
      icon="mdi:twitch" />
    </div>
    <div class="col">
      <CStreamerName
      text-size="tiny"
      skin="dim"
      channel="/Astronomoose"
      icon="mdi:twitch" />
      <CStreamerName
      text-size="small"
      skin="dim"
      channel="/Astronomoose"
      icon="mdi:twitch" />
      <CStreamerName
      text-size="medium"
      skin="dim"
      channel="/Astronomoose"
      icon="mdi:twitch" />
      <CStreamerName
      text-size="large"
      skin="dim"
      channel="/Astronomoose"
      icon="mdi:twitch" />
    </div>
    <div class="col">
      <CStreamerName
      text-size="tiny"
      skin="dark"
      channel="/Astronomoose"
      icon="mdi:twitch" />
      <CStreamerName
      text-size="small"
      skin="dark"
      channel="/Astronomoose"
      icon="mdi:twitch" />
      <CStreamerName
      text-size="medium"
      skin="dark"
      channel="/Astronomoose"
      icon="mdi:twitch" />
      <CStreamerName
      text-size="large"
      skin="dark"
      channel="/Astronomoose"
      icon="mdi:twitch" />
    </div>
  </div>
</template>

<style>
main .c {
  margin: var(--size-fluid-3);
}
</style>