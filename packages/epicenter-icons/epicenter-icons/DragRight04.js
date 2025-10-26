import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14.5 13.5V12.5C14.5 11.6716 13.8284 11 13 11H12M11.5 13V7C11.5 6.17157 10.8284 5.5 10 5.5C9.17157 5.5 8.5 6.17157 8.5 7V16L7.11791 14.3014C6.47161 13.6633 5.40702 13.7215 4.83605 14.4262C4.39916 14.9654 4.38709 15.7281 4.80671 16.2804L7.99201 20.6739C8.36821 21.1928 8.97031 21.5 9.61123 21.5H16.8529C18.3149 21.5 19.5 20.3583 19.5 18.95V14.5C19.5 13.6716 18.8284 13 18 13H17.5M17 14V13.5C17 12.6716 16.3284 12 15.5 12H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8.19621 9C7.17979 8.38755 6.5 7.27316 6.5 6C6.5 4.067 8.067 2.5 10 2.5C11.933 2.5 13.5 4.067 13.5 6C13.5 7.27316 12.8202 8.38755 11.8038 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 3.5L19.5 6L17 8.5M13.5 6H18.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DragRight04',
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
