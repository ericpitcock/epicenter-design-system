import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 9H11.5M21 9H15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 3V19C5 20.1046 5.89543 21 7 21H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10.5 4H16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11.5 4V9L8.61286 15.5992C8.32381 16.2599 8.80786 17 9.52902 17H17.471C18.1921 17 18.6762 16.2599 18.3871 15.5992L15.5 9V4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Chemistry02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
