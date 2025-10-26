import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 5L15.3333 8.66667M13.5 6.83333L17.1667 10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 6.68722L17.7971 10.8898C16.9852 11.7016 15.8891 12.1657 14.741 12.1836H13.5L4.77175 21.4921C4.15326 22.1537 3.10957 22.1713 2.46911 21.5309C1.82872 20.8906 1.84625 19.8471 2.50778 19.2287L11.8157 10.5V9.25855C11.8335 8.11046 12.2976 7.01438 13.1096 6.20246L17.3124 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Fork',
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
