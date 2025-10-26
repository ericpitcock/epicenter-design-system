import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 22V2M12 2L22 17M12 2L2 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 8C14.8554 9.2634 13.4798 10 12 10C10.5202 10 9.14458 9.2634 8 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 14C9.78035 14 7.71687 13.2634 6 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Angle',
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
