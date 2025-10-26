import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 10H9M3 14H9M14 6C13.0521 4.77011 11.6954 4 10.1887 4C7.32306 4 5 6.78578 5 10.2222V13.7778C5 17.2142 7.32306 20 10.1887 20C11.6954 20 13.0521 19.2299 14 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18.5 14.5L21 12L18.5 9.5M14 12H20.3912', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EuroSend',
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
