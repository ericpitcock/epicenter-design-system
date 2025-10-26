import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5 22V4C21.5 2.89543 20.6046 2 19.5 2L5.5 2C4.39543 2 3.5 2.89543 3.5 4V22', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12.5 22V14H7.5V22', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3.5 6H21.5', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M3.5 19H7.5M12.5 19L21.5 19', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M4 9H6M9 9H11M14 9H16M19 9H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M2.5 22H22.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Kaaba02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 25 24',
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
