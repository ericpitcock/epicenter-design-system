import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8.5 17C8.5 16.1716 7.82843 15.5 7 15.5C6.17157 15.5 5.5 16.1716 5.5 17C5.5 17.8284 6.17157 18.5 7 18.5C7.82843 18.5 8.5 17.8284 8.5 17Z' })
const _hoisted2 = h('path', { 'd': 'M13.2073 4.70676C12.8167 4.31642 12.1835 4.31662 11.7932 4.70722L3.55129 12.9535C1.4829 15.023 1.4829 18.3784 3.55129 20.4479C5.61967 22.5174 8.97319 22.5174 11.0416 20.4479L19.2922 12.2017C19.6831 11.8111 19.683 11.1776 19.2922 10.787L13.2073 4.70676Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M18.5 9.5L21.2929 6.70711C21.6834 6.31658 21.6834 5.68342 21.2929 5.29289L18.7071 2.70711C18.3166 2.31658 17.6834 2.31658 17.2929 2.70711L14.5 5.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'UsbMemory01',
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
