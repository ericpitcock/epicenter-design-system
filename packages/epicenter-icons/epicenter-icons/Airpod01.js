import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.5 2.5H5.5C3.84315 2.5 2.5 3.84315 2.5 5.5V18.5C2.5 20.1569 3.84315 21.5 5.5 21.5H18.5C20.1569 21.5 21.5 20.1569 21.5 18.5V5.5C21.5 3.84315 20.1569 2.5 18.5 2.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2.5 9H6.98611M21.5 9H17.0139' })
const _hoisted3 = h('rect', { 'height': '4', 'rx': '2', 'stroke-linejoin': 'round', 'width': '10', 'x': '7', 'y': '7' })

export default defineComponent({
    name: 'Airpod01',
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
