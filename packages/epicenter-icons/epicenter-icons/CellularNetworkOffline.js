import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 12.5L12 20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.5 7.06301C11.6598 7.02188 11.8274 7 12 7C13.1046 7 14 7.89543 14 9C14 9.17265 13.9781 9.34019 13.937 9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2 2L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M16.9588 6C17.6186 6.86961 18 7.89801 18 9C18 10.102 17.6186 11.1304 16.9588 12M7.04117 12C6.38143 11.1304 6 10.102 6 9C6 8.29588 6.15572 7.62181 6.44027 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M20.3159 4C21.3796 5.43008 22 7.14984 22 9C22 10.8502 21.3796 12.5699 20.3159 14M3.68409 4C2.62036 5.43008 2 7.14984 2 9C2 10.8502 2.62036 12.5699 3.68409 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CellularNetworkOffline',
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
