import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.5 10C14.6716 10 14 9.32843 14 8.5M8.5 10C9.32843 10 10 9.32843 10 8.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14 2V3C14 4.10457 14.8954 5 16 5H17C19.2091 5 21 6.79086 21 9V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10 2V3C10 4.10457 9.10457 5 8 5H7C4.79086 5 3 6.79086 3 9V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 13V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M18 11.5C18 11.5 17.4549 14.3636 17.503 17.2273C17.535 19.1271 18 22 18 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M6 11.5C6 11.5 6.54513 14.3636 6.49699 17.2273C6.46505 19.1271 6 22 6 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BackMuscleBody',
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
