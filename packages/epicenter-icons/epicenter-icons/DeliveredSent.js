import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6.5 8.00012L9 5.50012L6.5 3.00012M2.5 5.50012H8.39122', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 19.0001C19 20.1047 18.1046 21.0001 17 21.0001C15.8954 21.0001 15 20.1047 15 19.0001C15 17.8956 15.8954 17.0001 17 17.0001C18.1046 17.0001 19 17.8956 19 19.0001Z' })
const _hoisted3 = h('path', { 'd': 'M8.99805 19.0001C8.99805 20.1047 8.10262 21.0001 6.99805 21.0001C5.89348 21.0001 4.99805 20.1047 4.99805 19.0001C4.99805 17.8956 5.89348 17.0001 6.99805 17.0001C8.10262 17.0001 8.99805 17.8956 8.99805 19.0001Z' })
const _hoisted4 = h('path', { 'd': 'M14.5 7.50013L17.8676 7.50012C18.4207 7.50012 18.6973 7.50012 18.9265 7.62993C19.1558 7.75973 19.298 7.99687 19.5826 8.47115L22 12.5002', 'stroke-linecap': 'round' })
const _hoisted5 = h('path', { 'd': 'M12 5.50012H13.5C14.0523 5.50012 14.5 5.94784 14.5 6.50012V11.5001C14.5 12.0524 14.9477 12.5001 15.5 12.5001H22V19.0001H19M15 19.0001H9M5 19.0001H3C2.44772 19.0001 2 18.5524 2 18.0001V10.0001', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'DeliveredSent',
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
