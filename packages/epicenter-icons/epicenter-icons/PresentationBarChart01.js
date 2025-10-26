import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.5 15V5C21.5 3.34315 20.1569 2 18.5 2H5.5C3.84315 2 2.5 3.34315 2.5 5V15C2.5 16.6569 3.84315 18 5.5 18L18.5 18C20.1569 18 21.5 16.6569 21.5 15Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 13V10M12 13V7M16 13V11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 18V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M10 18L5 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M14 18L19 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PresentationBarChart01',
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
