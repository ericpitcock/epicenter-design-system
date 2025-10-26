import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.2343 7.86957C21.5158 9.42897 21.961 10.9117 21.9989 11.6957C21.3288 11.3893 20.5765 11.2174 19.7816 11.2174C17.3364 11.2174 14.4995 13 14.4995 16H9.49947C9.49947 13 7 11 4 11L2 9.66597V8L10.0038 9.66597L10.9732 9.10614C12.2615 8.22518 14.3032 7.39305 16.3384 8.12822L17.5 8.5L20.2343 7.86957ZM20.2343 7.86957C19.431 6.89211 18.2992 5.88452 16.7331 5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '19.5', 'cy': '16.5', 'r': '2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '4.5', 'cy': '16.5', 'r': '2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Motorbike02',
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
