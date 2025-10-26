import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '13', 'r': '4', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '4', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '4', 'cy': '20', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted4 = h('circle', { 'cx': '20', 'cy': '20', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M12 9V6M18.5 18.5L15 16M5.5 18.5L9 16', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Molecules',
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
