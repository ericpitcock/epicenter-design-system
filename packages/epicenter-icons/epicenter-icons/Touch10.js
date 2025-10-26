import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.5 21V11.5C17.5 8.46243 15.0376 6 12 6C8.96243 6 6.5 8.46243 6.5 11.5L6.5 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 13V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12L3 13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14.5 14V11.5C14.5 10.1193 13.3807 9 12 9C10.6193 9 9.5 10.1193 9.5 11.5V14H14.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Touch10',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
