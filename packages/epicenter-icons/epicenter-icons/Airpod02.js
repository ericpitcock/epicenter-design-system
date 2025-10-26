import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.5 2.5H5.5C3.84315 2.5 2.5 3.84315 2.5 5.5V18.5C2.5 20.1569 3.84315 21.5 5.5 21.5H18.5C20.1569 21.5 21.5 20.1569 21.5 18.5V5.5C21.5 3.84315 20.1569 2.5 18.5 2.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 14H12.009', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2.5 7H21.5' })
const _hoisted4 = h('path', { 'd': 'M7 7V8.5C7 9.60457 7.89543 10.5 9 10.5H15C16.1046 10.5 17 9.60457 17 8.5V7' })

export default defineComponent({
    name: 'Airpod02',
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
            _hoisted4
        ])
    }
})
