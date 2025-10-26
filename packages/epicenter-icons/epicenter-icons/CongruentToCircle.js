import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.5 12.5022H16.5M7.5 16H16.5M7.5 9.50402C8.4 7.64165 10.5 7.54875 12 9.00431M16.5 8.49966C15.6 10.362 13.5 10.4549 12 8.99937', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '12', 'r': '10', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CongruentToCircle',
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
