import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.5 20H13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20.5 15.2702L17.9114 18L15.3485 15.2702M3.5 17.4169V7C3.5 5.34315 4.84315 4 6.5 4H14.9213C16.5793 4 17.9229 5.34494 17.9213 7.00294L17.9114 17.0581', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'StepOver',
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
