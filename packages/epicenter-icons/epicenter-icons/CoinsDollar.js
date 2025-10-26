import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14 18C18.4183 18 22 14.4183 22 10C22 5.58172 18.4183 2 14 2C9.58172 2 6 5.58172 6 10C6 14.4183 9.58172 18 14 18Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3.15657 11C2.42523 12.1176 2 13.4535 2 14.8888C2 18.8162 5.18378 22 9.11116 22C10.5465 22 11.8824 21.5748 13 20.8434', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14 7C12.8954 7 12 7.67157 12 8.5C12 9.32843 12.8954 10 14 10C15.1046 10 16 10.6716 16 11.5C16 12.3284 15.1046 13 14 13M14 7C14.8708 7 15.6116 7.4174 15.8862 8M14 7V6M14 13C13.1292 13 12.3884 12.5826 12.1138 12M14 13L14 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CoinsDollar',
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
