import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 17C8.42265 16.5774 8.97169 16.2441 9.5 16.0001M16 17C15.5774 16.5774 15.0283 16.2441 14.5 16.0001', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18.5 14.0001C17.6107 13.2259 16.8172 12.4421 16 12M5.5 14.0001C6.33209 13.1679 7.16791 12.4278 8 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 11.0001C3.34347 9.65654 5.48911 8.125 7 7.5M22 10.9999C20.6565 9.65653 18.5109 8.125 17 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 20H12.0118', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M12.0001 17L9.28267 5.22487C9.13806 4.59825 9.61397 4 10.2571 4H13.743C14.386 4 14.8619 4.59824 14.7174 5.22485L12.0001 17Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WifiError02',
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
            _hoisted4,
            _hoisted5
        ])
    }
})
