<template>
  <ep-container :fullWidth="true" :fullHeight="true" :flexCol="true" padding="0">
    <ep-control-bar :style="{ flex: '0 0 61px' }">
      <ep-control-bar-segment>
        <ep-button kind="primary" label="Primary" />
        <ep-button kind="naked" label="Naked" icon="arrow-down" />
        <ep-button kind="danger" label="Danger" />
        <ep-button kind="warning" label="Warning" />
        <ep-button kind="success" label="Success" icon="star" />
        <ep-dropdown buttonKind="naked" buttonLabel="Dropdown">
          <template v-for="(item, index) in fakeDropdownItems">
            <ep-button
              v-if="!item.divider"
              :key="`item-${index}`"
              :label="item.label"
              :icon="item.icon"
              kind="menu-item"
              @click.native="onClick(item.action, $event)"
            />
            <ep-divider v-else :key="`divider-${index}`" />
          </template>
        </ep-dropdown>
      </ep-control-bar-segment>
    </ep-control-bar>
    <ep-map mapStyle="mapbox://styles/ericpitcock/cke3hfy27072i1bmzjovpgvph" />
  </ep-container>
</template>

<script>
  import EpButton from '@/components/button/EpButton'
  import EpDropdown from '@/components/dropdown/EpDropdown'
  import EpDivider from '@/components/dropdown/EpDivider'
  import EpControlBar from '@/components/controlbar/EpControlBar'
  import EpControlBarSegment from '@/components/controlbar/EpControlBarSegment'
  import EpMap from '@/components/map/EpMap'
  import EpContainer from '@/components/container/EpContainer'

  export default {
    name: 'Playground',
    components: {
      EpButton,
      EpControlBar,
      EpControlBarSegment,
      EpDropdown,
      EpDivider,
      EpMap,
      EpContainer
    },
    data: () => ({
      fakeDropdownItems: [
        {
          label: 'Go to internal page',
          icon: 'arrow-right',
          action: {
            type: 'router-link',
            path: '/fart'
          }
        },
        {
          divider: true
        },
        {
          label: 'Run a method',
          icon: 'circle',
          action: {
            type: 'method',
            method: 'fakeMethod'
          }
        },
        {
          label: 'Link to internet',
          icon: 'export',
          action: {
            type: 'link',
            href: 'https://www.google.com/maps'
          }
        }
      ]
    }),
    methods: {
      onClick(action, event) {
        if (this.disabled) return
        this.$emit('click')
        let actionType = action.type
        if (actionType == 'router-link') {
          // router.push
          console.log('this is a router link')
        }
        if (actionType == 'method') {
          this[action.method](event)
        }
        if (actionType == 'link') {
          // .top is used to target the parent in an iframe situation
          // probably don't need it outside of Storybook
          window.top.location.href = action.href
        }
      },
      fakeMethod(event) {
        alert('this is a fake method')
        console.log(event)
      }
    }
  }
</script>

<style lang="scss" scoped>
  // this is temporary
  .ep-control-bar__segment > {
    * + * {
      margin-left: 10px;
    }
  }
</style>