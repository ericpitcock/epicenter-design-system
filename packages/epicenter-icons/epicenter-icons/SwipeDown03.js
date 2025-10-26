import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.5 8L16 5.5M18.5 8L21 5.5M18.5 8V2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5.87124 12.671L8.00514 14.5V4.75C8.00514 3.7835 8.78864 3 9.75514 3C10.7216 3 11.5051 3.7835 11.5051 4.75V11H16C17.6569 11 19 12.3431 19 14V19C19 20.6569 17.6569 22 16 22H9.07C8.4015 22 7.77719 21.666 7.40622 21.1099L3.38941 15.0883C2.87331 14.4531 2.86987 13.5441 3.38114 12.905C3.99565 12.1369 5.12437 12.0308 5.87124 12.671Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SwipeDown03',
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
