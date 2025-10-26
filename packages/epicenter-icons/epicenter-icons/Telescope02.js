import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 22L14 13L9 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 4L5.83184 10.0085C5.36788 10.2826 5.20461 10.8751 5.46267 11.3482L7.5044 15.0914C7.77532 15.5881 8.40396 15.7613 8.89103 15.4735L19 9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16.2195 4.45572C15.7677 3.67278 16.0358 2.67162 16.8184 2.21959C17.601 1.76755 18.6017 2.03581 19.0535 2.81876L21.7805 7.54428C22.2323 8.32723 21.9642 9.32838 21.1816 9.78042C20.399 10.2325 19.3983 9.96419 18.9465 9.18124L16.2195 4.45572Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 14.2645L2.73817 15.6322M2.73817 15.6322L3.5 17M2.73817 15.6322L6.5 13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Telescope02',
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
            _hoisted4
        ])
    }
})
