import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.2517 10.4541L18.1012 12L17.1457 10.7969C16.8225 10.3899 16.8649 9.8032 17.2433 9.44693L17.5203 9.18609C18.3853 8.49338 18.4735 7.18812 17.7083 6.40307C16.9431 5.61801 15.7851 5.74052 14.9957 6.59591L14.6858 6.92071C14.3046 7.32029 13.6716 7.33519 13.272 6.95398L12 5.74052L13.7597 3.79364C15.4409 1.56805 18.6638 1.38533 20.6315 3.40404C22.5991 5.42276 22.421 8.7293 20.2517 10.4541Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '4.5', 'cy': '19.5', 'r': '2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 17.4103L12 7M6.58974 21L17 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SafetyPin01',
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
