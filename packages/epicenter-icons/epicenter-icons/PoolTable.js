import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21 3H3C2.44772 3 2 3.44772 2 4V16C2 16.5523 2.44772 17 3 17H21C21.5523 17 22 16.5523 22 16V4C22 3.44772 21.5523 3 21 3Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12.0119 9H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 14C3.65685 14 5 15.3431 5 17M2 6C3.65685 6 5 4.65685 5 3', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M22 14C20.3431 14 19 15.3431 19 17M22 6C20.3431 6 19 4.65685 19 3', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17M14 3C14 4.10457 13.1046 5 12 5C10.8954 5 10 4.10457 10 3', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M10 12L4 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PoolTable',
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
