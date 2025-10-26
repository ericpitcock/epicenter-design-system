import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20 15H5C3.89543 15 3 15.8954 3 17V20C3 21.1046 3.89543 22 5 22H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18.2454 15C19.3433 13.6304 20 11.8919 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 11.8919 4.65672 13.6304 5.75463 15M17.5 5L16 6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M16.5 17L19 19.5M19 19.5L21.5 22M19 19.5L16.5 22M19 19.5L21.5 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SoftwareUninstall',
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
