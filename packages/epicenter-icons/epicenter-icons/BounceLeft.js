import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9 10C11.1153 13.01 12.4407 18.066 13.0872 20.9991C14.4328 18.2908 17 15 20 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '6', 'cy': '5', 'r': '2', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BounceLeft',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
