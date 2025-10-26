import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 10H7.46482C7.79917 10 8.1114 10.1671 8.29687 10.4453L9.70313 12.5547C9.8886 12.8329 10.2008 13 10.5352 13H13.4648C13.7992 13 14.1114 12.8329 14.2969 12.5547L15.7031 10.4453C15.8886 10.1671 16.2008 10 16.5352 10H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Wallet05',
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
