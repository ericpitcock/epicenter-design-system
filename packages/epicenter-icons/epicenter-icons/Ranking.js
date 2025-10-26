import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 22V16C3 15.4477 3.44772 15 4 15H8C8.55228 15 9 15.4477 9 16V22', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 22V18C15 17.4477 15.4477 17 16 17H20C20.5523 17 21 17.4477 21 18V22', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 22V14C9 13.4477 9.44772 13 10 13H14C14.5523 13 15 13.4477 15 14V22', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 22H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M9.21885 10L12 8.54499L14.7812 10L14.16 7.07823L16.5 5.05573L13.335 4.70499L12 2L10.6651 4.70499L7.5 5.05573L9.84 7.07823L9.21885 10Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Ranking',
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
