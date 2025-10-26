import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 21V12M3 12V3M3 12H6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20.6409 12.7959C21.1197 12.3691 21.1197 11.6309 20.6409 11.2041L16.238 7.27972C15.8195 6.90676 15.1805 6.90676 14.762 7.27972L10.3591 11.2041C9.8803 11.6309 9.8803 12.3691 10.3591 12.7959L14.762 16.7203C15.1805 17.0932 15.8195 17.0932 16.238 16.7203L20.6409 12.7959Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'KeyframeLeft',
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
