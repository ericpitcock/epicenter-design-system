import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16.8463 14.6095L19.4558 12C21.5147 9.94113 21.5147 6.60303 19.4558 4.54416C17.397 2.48528 14.0589 2.48528 12 4.54416L9.39045 7.1537M14.6095 16.8463L12 19.4558C9.94113 21.5147 6.60303 21.5147 4.54416 19.4558C2.48528 17.397 2.48528 14.0589 4.54416 12L7.1537 9.39045', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 17H20M17 22V20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 7H4M7 2V4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Unlink02',
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
