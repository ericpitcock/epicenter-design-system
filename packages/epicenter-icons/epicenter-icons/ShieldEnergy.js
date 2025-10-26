import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 11.9997L12.9999 5.99994L13 10.9999L15.9999 10.9997L11 16.9999V11.9999L8 11.9997Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3.43067 4.93443C6.56932 5.16025 8.59312 2.00103 12.0266 2.00103C15.4086 1.93395 17.0635 4.97662 20.5307 4.97662C22.3893 14.3836 18.5226 20.2927 12.0549 21.9999C6.0595 20.583 1.5547 14.6133 3.43067 4.93443Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ShieldEnergy',
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
