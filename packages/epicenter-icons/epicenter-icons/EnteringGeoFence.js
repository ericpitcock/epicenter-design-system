import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 17L15.5 13.5M12 17L8.5 13.5M12 17V3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 15C3.7492 15.6327 3 16.4384 3 17.3158C3 19.3505 7.02944 21 12 21C16.9706 21 21 19.3505 21 17.3158C21 16.4384 20.2508 15.6327 19 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EnteringGeoFence',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
