import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 21.5H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.5 5.5H8.5V11.5H14.5V5.5Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12.9879 11.5H9.99219V21.5H12.9879V11.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M13.5 2.5H7.76371C6.98854 2.5 6.28318 2.94793 5.95355 3.64952L2.5 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M11.4844 2.5V5.5', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M18.5558 7.00016L14.5 7V9.99032H18.4934C18.4989 9.99032 18.5033 9.99484 18.5033 10.0004V12.5H21.4951V10.4995C21.6127 7.81995 19.5846 7.05013 18.5558 7.00016Z', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M19.9998 15.5C17.756 17.6981 18.2601 19.5 19.9993 19.5C21.7386 19.5 22.2435 17.6981 19.9998 15.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WaterPump',
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
            _hoisted5,
            _hoisted6,
            _hoisted7
        ])
    }
})
