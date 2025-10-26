import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 19H4C2.89543 19 2 19.8954 2 21V22H22V21C22 19.8954 21.1046 19 20 19Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10.5 7L10.9005 2.99504C10.957 2.43017 11.4323 2 12 2C12.5677 2 13.043 2.43017 13.0995 2.99504L13.5 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M4 19L6.87 9.16C7.24333 7.88 8.41667 7 9.75 7H14.25C15.5833 7 16.7567 7.88 17.13 9.16L20 19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11.5 11L12 10.5L12.5 11L12 11.5L11.5 11Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M9 15L9.5 14.5L10 15L9.5 15.5L9 15Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M14 15L14.5 14.5L15 15L14.5 15.5L14 15Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Borobudur',
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
            _hoisted5,
            _hoisted6
        ])
    }
})
