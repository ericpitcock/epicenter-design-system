import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 7.5V22C13.8315 20.3871 16.2062 19.4966 18.6667 19.5C19.8356 19.5 20.9578 19.6963 22 20.0585V5.55847C20.9578 5.19634 20.1689 5 19 5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 2C13 2 12 7.5 12 7.5V22C12 22 13 16.5 19 16.5V2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5.33333 5.00001C7.79379 4.99657 10.1685 5.88709 12 7.5V22C10.1685 20.3871 7.79379 19.4966 5.33333 19.5C4.16444 19.5 3.04222 19.6963 2 20.0585V5.55847C3.04222 5.19634 4.16444 5.00001 5.33333 5.00001Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BookOpen02',
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
