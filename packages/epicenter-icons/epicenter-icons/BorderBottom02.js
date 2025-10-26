import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.5 17.5L2.5 18.5C2.5 20.1569 3.84315 21.5 5.5 21.5L18.5 21.5C20.1569 21.5 21.5 20.1569 21.5 18.5V17.5M2.5 14L2.5 10M21.5 10V14M21.5 6.25V5.5C21.5 3.84315 20.1569 2.5 18.5 2.5H17.75M10 2.5H14M6.25 2.5H5.5C3.84315 2.5 2.5 3.84314 2.5 5.5L2.5 6.25', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BorderBottom02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
