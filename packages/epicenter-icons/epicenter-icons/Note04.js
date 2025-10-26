import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19.4999 2.5L7.49994 2.5C6.39537 2.5 5.49994 3.39543 5.49994 4.5V19.5C5.49994 20.6046 6.39537 21.5 7.49994 21.5L19.4999 21.5C20.6045 21.5 21.4999 20.6046 21.4999 19.5V4.5C21.4999 3.39543 20.6045 2.5 19.4999 2.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5.5 10.5L4 10.5C3.17157 10.5 2.5 9.82843 2.5 9C2.5 8.17157 3.17157 7.5 4 7.5L7.5 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5.5 17.5L4 17.5C3.17157 17.5 2.5 16.8284 2.5 16C2.5 15.1716 3.17157 14.5 4 14.5L7.5 14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11 10.5H15M11 6.5H17.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Note04',
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
