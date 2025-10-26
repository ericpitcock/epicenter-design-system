import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 16C3.7492 16.6327 3 17.4385 3 18.3158C3 20.3505 7.02944 22 12 22C16.9706 22 21 20.3505 21 18.3158C21 17.4385 20.2508 16.6327 19 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 10V17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '12', 'cy': '6', 'r': '4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PinLocation03',
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
