import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5.62195 20.1012L3.0462 11.8004C2.84628 11.1561 3.32023 10.5001 3.98567 10.5001H20.0143C20.6798 10.5001 21.1537 11.1561 20.9538 11.8004L18.3781 20.1012C18.1197 20.9338 17.3591 21.5001 16.4991 21.5001H7.50089C6.64091 21.5001 5.88032 20.9338 5.62195 20.1012Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 8V7.5C5 6.94772 5.44772 6.5 6 6.5H18C18.5523 6.5 19 6.94772 19 7.5V8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7.5 4V3.5C7.5 2.94772 7.94772 2.5 8.5 2.5H15.5C16.0523 2.5 16.5 2.94772 16.5 3.5V4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FolderLibrary',
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
