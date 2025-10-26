import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9.01654 6.15879C10.9944 4.77262 17.9171 3.55944 18.906 6.15879C20.3862 10.0497 3.87743 12.3805 5.06077 6.15849C5.55508 3.55944 10.5002 2 12.9725 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M18 11C15.423 13.0786 8.5771 13.9133 6 11.6514', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14 21.5C13.0288 21.8064 12.0004 21.9824 11 21.9996', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 15C9.07731 16.3711 12.3835 16.2354 15 15.1797', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M8 18.5039C9.46578 19.0929 11.274 19.1354 13 18.768', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Tornado02',
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
            _hoisted4,
            _hoisted5
        ])
    }
})
