import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.5 18C8.88071 18 10 16.8807 10 15.5C10 14.1193 8.88071 13 7.5 13C7.32877 13 7.16155 13.0172 7 13.05' })
const _hoisted2 = h('path', { 'd': 'M7.5 8.5L8 4L10.6 5M10 9.5L11 2L14 3L12.5 10.5M13 11L15.5 6H18.5L15 12', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17.5 12.5L5.5 8L8.5 22L17.5 12.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FrenchFries01',
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
