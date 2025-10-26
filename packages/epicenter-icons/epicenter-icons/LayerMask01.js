import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 20L19 5', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 9L22 13.8528M12.4128 12.4059L19.3601 18.3634M8 15.6672L15 21.5', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LayerMask01',
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
