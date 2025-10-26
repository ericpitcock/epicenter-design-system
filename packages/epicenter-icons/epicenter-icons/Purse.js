import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 14C16 14.8284 16.6716 15.5 17.5 15.5C18.3284 15.5 19 14.8284 19 14C19 13.1716 18.3284 12.5 17.5 12.5C16.6716 12.5 16 13.1716 16 14Z' })
const _hoisted2 = h('path', { 'd': 'M6 18C6 18.6667 5.10457 20 4 20C2.89543 20 2 19.1046 2 18C2 16.8954 2.89543 16 4 16C5.10457 16 6 17.3333 6 18ZM6 18C6 18.5 6.89543 20 8 20C9.10457 20 10 19.1046 10 18C10 16.8954 9.10457 16 8 16C6.89543 16 6 17.5 6 18Z' })
const _hoisted3 = h('path', { 'd': 'M10 7.00005H18M18 7.00005H20C21.1046 7.00005 22 7.89548 22 9.00005V18C22 19.1046 21.1046 20 20 20L12.5 20M18 7.00005V5C18 4.44772 17.5523 4 17 4H4C2.89543 4 2 4.89543 2 6V13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Purse',
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
