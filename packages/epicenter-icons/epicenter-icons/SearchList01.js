import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.5 9H6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2.5 14H6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2.5 4H18.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18.5355 17.0355L21.5 20M20 13.5C20 10.7386 17.7614 8.5 15 8.5C12.2386 8.5 10 10.7386 10 13.5C10 16.2614 12.2386 18.5 15 18.5C17.7614 18.5 20 16.2614 20 13.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SearchList01',
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
