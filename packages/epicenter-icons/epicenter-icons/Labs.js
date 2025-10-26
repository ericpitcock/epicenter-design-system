import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16.5 21C14.567 21 13 19.433 13 17.5L13 3L20 3L20 17.5C20 19.433 18.433 21 16.5 21Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 3L11 3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15.5 7H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M20 11H13', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M6 11C6 11 10 13.5 10 16.75C10 19.0972 8.20914 21 6 21C3.79086 21 2 19.0972 2 16.75C2 13.5 6 11 6 11Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Labs',
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
