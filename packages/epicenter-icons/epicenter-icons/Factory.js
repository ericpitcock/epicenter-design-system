import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 10H9.00293', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.0034 2H8C6.89543 2 6 2.89543 6 4V4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 2H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M11.0039 5H17.0068', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M8.97685 13.5222L15.0555 11.0594V13.5463L20.9885 11.0594L20.999 20.9987C20.9995 21.5515 20.5515 21.9999 19.9987 21.9998L8.97685 21.9972M8.97685 13.5222V21.9972M8.97685 13.5222V8.00192C8.97685 7.44889 8.52796 7.00086 7.97493 7.00192L3.99808 7.00956C3.44655 7.01062 3 7.45802 3 8.00956V20.9995C3 21.552 3.448 21.9998 4.00047 21.9995L8.97685 21.9972', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Factory',
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
